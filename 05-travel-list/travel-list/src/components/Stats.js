export default function Stats({ numItems, numPacked, packedPercentage }) {
    if (numItems === 0)
        return (
            <footer className="stats">
                <em>Start adding some items to your packing list 🚀</em>
            </footer>
        );

    return (
        <footer className="stats">
            <em>
                {packedPercentage === 100
                    ? "You got everything! Ready to go ✈"
                    : `💼 You have ${numItems} items on your list, and you already packed ${numPacked} (${packedPercentage}%)`}
            </em>
        </footer>
    );
}
