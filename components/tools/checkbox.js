import { useState } from "react";

export default function Checkbox ({value, symbol, group, checkbox, onChange}) {
	const [checked, setChecked] = useState(false);

  return (
        <div>
            <input
                type="checkbox"
                id={group + checkbox}
                value={value}
                data-symbol={symbol}
                onChange={onChange}
                className="mr-2"
            />

            <label htmlFor={group + checkbox}>{checkbox}</label>
        </div>
    )
}
