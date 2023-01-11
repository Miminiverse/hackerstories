

export default function Item({ item, filteredList, dispatchStories }) {

    function handleRemove(item) {
        dispatchStories({
            type: 'REMOVE_STORIES',
            payload: item,
        })
    }

    function handleToggleComplete(objectID) {
        const newToggleList = filteredList.map((story) => {
            if (story.objectID === objectID) {
                const updateToggleList = {
                    ...story,
                    isComplete: !story.isComplete
                }
                return updateToggleList
            }
            return story
        }
        )
        dispatchStories({
            type: "SET_STORIES",
            payload: newToggleList
        })
    }

    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <span
                style={{ textDecoration: item.isComplete ? "line-through" : "none" }}
            >{item.name}
            </span>
            <button
                type="button"
                onClick={() => handleRemove(item)}>
                Remove
            </button>
            <button
                type="button"
                onClick={() => handleToggleComplete(item.objectID)}>
                {item.isComplete ? "undone" : "done"}
            </button>

        </div>
    )
};