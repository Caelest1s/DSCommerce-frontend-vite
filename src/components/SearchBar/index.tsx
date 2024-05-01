import { useState } from 'react';
import './styles.css';

type Props = {
    onSearch: Function;
}

export default function SearchBar({ onSearch }: Props) {

    const [text, setText] = useState("");

    function handleSubmit(event: any) {
        // para não carregar a página(bloqueia a ação de carregar), ação padrão do submit()
        event.preventDefault();
        onSearch(text);
    }

    function handleChange(event: any) {
        setText(event.target.value)
    }

    function handleResetClick() {
        setText("");
        onSearch(text);
    }

    return (
        <form className="dsc-search-bar" onSubmit={handleSubmit}>
            <button type="submit">🔎︎</button>
            <input
                value={text}
                onChange={handleChange}
                type="text"
                placeholder="Nome do produto" />
            <button onClick={handleResetClick}>🗙</button>
        </form>
    );
}