interface ProgressbarProps {
  progress: number
}

export function Progressbar(props: ProgressbarProps) {

  const progressStyles = {
    width: `${props.progress}%`
  }

  return (
    <div className="h-3 rounded-xl bg-zinc-700 w-full mt-4">
      <div
        role="progressbar"
        aria-label="Progresso de hábitos completados no dia"
        aria-valuenow={75}
        className="h-3 rounded-xl bg-violet-600 w-3/4"
        style={progressStyles}
      />

    </div>
  )
}