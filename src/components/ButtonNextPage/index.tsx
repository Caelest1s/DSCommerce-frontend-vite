import './styles.css';

// type Props = {
//     text: string;
// }

type Props = {
    onNextPage: Function;
}

// export default function ButtonNextPageAlternative({ text }: Props) {
//     return (
//         <div className="dsc-btn-next-page">
//             {text}
//         </div>
//     );
// }

export default function ButtonNextPage({ onNextPage }: Props) {
    return (
        <div onClick={() => onNextPage()} className="dsc-btn-next-page">Carregar mais</div>
    );
}

