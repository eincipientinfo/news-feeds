import React, { Component } from 'react'
import Modal from 'react-modal';
import './ArticleModal.css';
import {build_article_url} from "../../../Helpers";
export default class ArticleModal extends Component {
    componentWillMount() {
        Modal.setAppElement('body');
    }
    render() {
        return (
            <Modal 
            isOpen={this.props.isModalOpen}
            onRequestClose={this.props.closeModal}
            >
                <div className="header-innner">
                    <span>ID : {this.props.article.id}</span>
                    <a onClick={this.props.closeModal} className="close">X</a>
                </div>
                <iframe src={build_article_url(this.props.article.id)} frameBorder={0}></iframe>
            </Modal>
        )
    }
}
