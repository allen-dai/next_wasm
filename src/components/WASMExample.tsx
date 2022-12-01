import { useContext } from "react"
import { WASMContext } from "../context/WASM"

export const WASMExample = () => {
    const ctx = useContext(WASMContext)


    if (!ctx.wasm) {
        return <>...</>
    }

    return <>Computed from WASM{ctx.wasm.network_init()}</>
}
