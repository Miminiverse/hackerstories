import Item from './Item'

export default function SearchList({ filteredList, setStories }) {

    const filtered = filteredList.map(item =>
        <Item
            key={item.objectID}
            item={item}
            filteredList={filteredList}
            setStories={setStories}
        />
    )
    return (
        <div>
            {filtered}

        </div>
    )
}