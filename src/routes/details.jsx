import React from 'react';
import Movies from '../components/movies';

const Details = ({ history, location: { state }}) => {
    const handleDes = () => {
        const downBtn = document.querySelector(".fa-chevron-down");
        const upBtn = document.querySelector(".fa-chevron-up");
        const des = document.querySelector(".detail__desCon");
        if (downBtn) {
            downBtn.classList.add('fa-chevron-up');
            downBtn.classList.remove('fa-chevron-down');
            des.style.display = "contents";
        } else if(upBtn) {
            upBtn.classList.add('fa-chevron-down');
            upBtn.classList.remove('fa-chevron-up');
            des.style.display = "none";
        }
    }
    if (state === undefined) {
        history.push(`/${"home"}`);
        return null;
    } else {
        return (
            <div className="totalGrid">
                <div className="detailGrid">
                    <div className="video-container">
                        <iframe id="ytplayer" type="text/html" width="100%" height="auto"
                            src={`https://www.youtube.com/embed/${state.id}`}
                            frameBorder="0" allowFullScreen></iframe>
                    </div>
                    <div className="detail__info">
                        <span className="detail__title">{state.title}</span>
                        <p className="detail__uploader">
                            {state.uploader}
                            <button className="desControl" onClick={handleDes}>
                                <i className="fas fa-chevron-down"></i>
                            </button>
                        </p>
                        <div className="detail__desCon">
                            <p className="desCon__des">{state.des}</p>
                        </div>
                    </div>
                </div>
                <div className="otherGrid">
                    <span className="otherTitle">Other videos...</span>
                    <Movies items={state.items} />
                </div>
            </div>
        );
    }
    }
export default Details;