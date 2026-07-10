import { useEffect, useState } from 'react'
import { useReducedMotion } from 'motion/react'
import { useCodeforces } from '../../hooks/useCodeforces'

interface SpecLine {
  text: string
  indent: number
  assert?: boolean
  comment?: string
}

function buildLines(rating: number, rank: string): SpecLine[] {
  return [
    { text: "test('abhishek smitha biju', () => {", indent: 0 },
    { text: "expect(role).toBe('engineer & founder')", indent: 1, assert: true },
    { text: "expect(fourkites).toMigrate('virtuoso → playwright')", indent: 1, assert: true },
    { text: 'expect(versor.customers).toBeGreaterThan(4)', indent: 1, assert: true },
    {
      text: `expect(codeforces.rating).toBe(${rating})`,
      indent: 1,
      assert: true,
      comment: `// ${rank.toLowerCase()}`,
    },
    { text: '})', indent: 0 },
  ]
}

const LINE_COUNT = 6

// One tick reveals a line; assert lines flip from "running" to "passed"
// one tick after they appear. The summary lands on the final tick.
const TOTAL_TICKS = LINE_COUNT + 2

export default function SpecRunner() {
  const reduceMotion = useReducedMotion()
  const cf = useCodeforces()
  const lines = buildLines(cf.rating, cf.rank)
  const [tick, setTick] = useState(() => (reduceMotion ? TOTAL_TICKS : 0))

  useEffect(() => {
    if (reduceMotion || tick >= TOTAL_TICKS) return
    const timeout = setTimeout(() => setTick((t) => t + 1), tick === 0 ? 700 : 480)
    return () => clearTimeout(timeout)
  }, [tick, reduceMotion])

  const done = tick >= TOTAL_TICKS

  return (
    <div aria-hidden="true" className="w-full max-w-lg min-w-0">
      <div className="border border-line bg-surface shadow-[8px_8px_0_0_var(--c-accent-soft)]">
        <div className="flex items-center gap-2 border-b border-line bg-surface-2 px-4 py-2.5">
          <span className="size-2 bg-line" />
          <span className="size-2 bg-line" />
          <span className="size-2 bg-gold" />
          <span className="ml-2 font-mono text-xs text-muted">portfolio.spec.ts</span>
          <span
            className={`ml-auto font-mono text-[10px] tracking-[0.25em] uppercase ${
              done ? 'text-accent' : 'text-muted'
            }`}
          >
            {done ? 'Passed' : 'Running'}
          </span>
        </div>

        <div className="px-4 py-4 font-mono text-[12px] leading-7 sm:px-5 sm:text-[12.5px]">
          {lines.map((line, i) => {
            const appearAt = i + 1
            const visible = tick >= appearAt
            const passed = tick >= appearAt + 1
            return (
              <div
                key={i}
                className={`flex items-baseline gap-2 whitespace-nowrap transition-opacity duration-300 ${
                  visible ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <span className="w-4 shrink-0 text-center">
                  {line.assert ? (
                    <span className={passed ? 'text-accent' : 'text-muted'}>
                      {passed ? '✓' : '·'}
                    </span>
                  ) : (
                    <span> </span>
                  )}
                </span>
                <span
                  className={`${line.indent ? 'pl-4' : ''} ${
                    line.assert ? 'text-ink' : 'text-muted'
                  } min-w-0 flex-1 overflow-hidden text-ellipsis`}
                >
                  {line.text}
                  {line.comment && <span className="text-muted"> {line.comment}</span>}
                </span>
              </div>
            )
          })}

          <div
            className={`mt-3 flex items-center gap-2 border-t border-line pt-3 transition-opacity duration-300 ${
              done ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <span className="font-semibold text-accent">✓ 4 passed</span>
            <span className="text-muted">(1.2s)</span>
            <span className="caret ml-auto inline-block h-4 w-2 bg-gold" />
          </div>
        </div>
      </div>

      <p className="sr-only">
        All checks pass: engineer and founder, Playwright test migration at FourKites, five Versor
        customers, Codeforces rating {cf.rating}.
      </p>
    </div>
  )
}
