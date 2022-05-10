export interface IControlPanel {
    onCompleteAll: () => void
    onDeleteAll: () => void
    onInput: (e: React.ChangeEvent<HTMLInputElement>) => void
    inputValue: string
    onAdd: () => void
}


