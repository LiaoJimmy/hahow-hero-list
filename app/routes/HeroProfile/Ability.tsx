interface AbilityProps {
  name: string;
  value: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export function Ability({ name, value, onIncrease, onDecrease }: AbilityProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-8 text-left">
        {name.toUpperCase()}
      </span>
      <button
        type="button"
        className="w-14 h-14 bg-red-400 text-white rounded disabled:opacity-50"
        onClick={onDecrease}
        disabled={value <= 0}
      >
        -
      </button>
      <input
        readOnly
        type="text"
        className="w-6 text-center pointer-events-none"
        name={name}
        value={value}
      />
      <button
        type="button"
        className="w-14 h-14 bg-green-400 text-white rounded"
        onClick={onIncrease}
      >
        +
      </button>
    </div>
  );
}
