import Item from './Item'

export default function SearchList({ filteredList, dispatchStories }) {

    const filtered = filteredList.map(item =>
        <Item
            key={item.objectID}
            item={item}
            filteredList={filteredList}
            dispatchStories={dispatchStories}
        />
    )
    return (
        <div>
            {filtered}

        </div>
    )
}