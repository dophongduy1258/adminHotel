

export default function Loading(){
    return(
        <div className="wrapper__loading">
            <div className="loading">
                <div className="lds-roller">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="loading-text">
                    <h2 className="title">Đang tải dữ liệu </h2>
                    <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                </div>
            </div>
        </div>
    )
}