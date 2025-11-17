interface AbilityProps {
  name: string;
  value: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export function Ability({ name, value, onIncrease, onDecrease }: AbilityProps) {
  return (
    <div className="flex items-center gap-4">
      <h2 className="w-8 text-lg text-left">
        {name.toUpperCase()}
      </h2>
      <div className="flex gap-2">
        <button
          type="button"
          className="btn btn-xl bg-red-400 text-white rounded disabled:opacity-50"
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
          className="btn btn-xl bg-green-400 text-white rounded"
          onClick={onIncrease}
        >
          +
        </button>
      </div>
    </div>
  );
}
