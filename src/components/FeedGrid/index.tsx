import FeedCard from "../feedCard";

function FeedGrid() {
    return (
        <div className="
        grid
        grid-cols-3
        gap-4
        ">
            <FeedCard title='Foto com Família' />
            <FeedCard title='Viagem de Férias' />
            <FeedCard title='Euzinho' />

            <FeedCard title='Amigos' />
            <FeedCard title='Dançando' />
            <FeedCard title='Mergulho' />

            <FeedCard title='Amigos no Parque' />
            <FeedCard title='Trabalho' />
            <FeedCard title='Estudos' />
        </div>
    );
}

export default FeedGrid;