import "./ArrowButton.scss";

export default function ArrowButton({ direction, isHovered, isSelected }) {
    if (isHovered[direction]) {
        return (
            <svg
                className={`arrow__filled arrow arrow--${direction}${
                    !!isSelected ? " arrow--exit" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 523.31 523.28"
            >
                <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                        <polygon
                            points="523.31 75.5 522.99 75.18 447.95 0.14 447.81 0 106.79 340.99 106.79 190.27 106.79 39.66 0 146.45 0 297.06 0 422.96 0 523.28 376.33 523.28 483.12 416.49 182.33 416.49 523.31 75.5"
                        />
                    </g>
                </g>
            </svg>
        );
    } else {
        return (
            <svg
                className={`arrow__empty arrow arrow--${direction}${
                    !!isSelected ? " arrow--exit" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 554.1 554.07"
            >
                <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                        <path
                            d="M394.37,554.07H0V159.2L132.3,26.9V328.23L460.57,0,554.1,93.54,225.87,421.77h300.8ZM25.51,528.56H383.8l81.29-81.28H164.29L518,93.54,460.57,36.07,106.79,389.81V88.48L25.51,169.77Z"
                        />
                    </g>
                </g>
            </svg>
        );
    }
}
