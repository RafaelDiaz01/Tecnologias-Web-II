export default function Stack({ children, gap = "gap-4", direction = "col", className = "" }) {
    const directionClass = direction === "row" ? "flex-row" : "flex-col";

    return (
        <div className={`flex ${directionClass} ${gap} ${className}`}>
            {children}
        </div>
    );
}