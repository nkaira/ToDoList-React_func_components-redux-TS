import { TypedUseSelectorHook, useSelector } from "react-redux";

import type { Reducer } from "store/index";

const useTypedSelector: TypedUseSelectorHook<Reducer> = useSelector;

export default useTypedSelector;