import errorImage from "/public/404.webp";

export default function Error() {
    return (
        <div className="d-flex vh-100 justify-content-center align-items-center">
            <img src={errorImage} alt="404" />
        </div>
    )
}
