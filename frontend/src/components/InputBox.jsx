export default function InputBox({ label, placeholder, onChange }) { //object destructuring
    return (
        <div className="min-w-full">
            <div className="text-sm font-medium text-left py-2">
                { label }
            </div>
            <input onChange={onChange} placeholder={placeholder} className="w-full px-1 py-1 rounded border  border-slate-200" />
        </div>
    )
}