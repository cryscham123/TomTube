import React, { Component } from 'react';
import axios from "axios";
import Movies from '../movies';

class Details extends Component {
    state = {
        isLoading: true,
        items: []
    };
    getMovies = async() => {
        const  {data:{items}}  = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`);
        this.setState({ items, isLoading: false });
    }
    componentDidMount() {
        const { location, history } = this.props
        if (location.state === undefined) {
            history.push("/");
        }
        this.getMovies();
    }
    handleDes() {
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
    render() {
        const { isLoading, items } = this.state;
         const { location } = this.props;
        if (location.state) {
            return (
                <div className="totalGrid">
                    <div className="detailGrid">
                        <div className="video-container">
                            <iframe id="ytplayer" type="text/html" width="100%" height="auto"
                                src={`https://www.youtube.com/embed/${location.state.id}`}
                                frameBorder="0" allowFullScreen></iframe>
                        </div>
                        <div className="detail__info">
                            <span className="detail__title">{location.state.title}</span>
                            <p className="detail__uploader">
                                {location.state.uploader}
                                <button className="desControl" onClick={this.handleDes}>
                                    <i className="fas fa-chevron-down"></i>
                                </button>
                            </p>
                            <div className="detail__desCon">
                                <p className="desCon__des">{location.state.des}</p>
                            </div>
                        </div>
                    </div>
                    <div className="otherGrid">
                            <span className="otherTitle">Other videos...</span>
                            {isLoading ? "Loading..." : <Movies items={ items }/>}
                        </div>
                </div>
            );
        } else {
            return null;
        }
    }
}
export default Details;