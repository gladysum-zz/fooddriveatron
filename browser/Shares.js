import React, { Component } from 'react';

import {
  ShareButtons,
  ShareCounts,
  generateShareIcon
} from 'react-share';

const {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  RedditShareButton,
} = ShareButtons;

const {
  FacebookShareCount,
  GooglePlusShareCount,
  LinkedinShareCount,
  PinterestShareCount,
  RedditShareCount,
} = ShareCounts;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const GooglePlusIcon = generateShareIcon('google');
const LinkedinIcon = generateShareIcon('linkedin');
const PinterestIcon = generateShareIcon('pinterest');
const WhatsappIcon = generateShareIcon('whatsapp');
const RedditIcon = generateShareIcon('reddit');

class Share extends Component {
  render() {
    let shareUrl = 'http://localhost3000/volunteer';
    let title = 'Join my food drive at FoodDriveATron!';

    return (
    <div className="share-container">
        <div className="network-container">
          <FacebookShareButton
            url={shareUrl}
            title={title}
            className="share-button">
            <FacebookIcon
              size={32}
              round />
          </FacebookShareButton>

          <FacebookShareCount
            url={shareUrl}
            className="share-count">
            {count => count}
          </FacebookShareCount>
        </div>

        <div className="network-container">
          <GooglePlusShareButton
            url={shareUrl}
            title={title}
            className="share-button">
            <GooglePlusIcon
              size={32}
              round />
          </GooglePlusShareButton>

          <GooglePlusShareCount
            url={shareUrl}
            className="share-count">
            {count => count}
          </GooglePlusShareCount>
        </div>

        <div className="network-container">
          <LinkedInShareButton
            url={shareUrl}
            title={title}
            windowWidth={750}
            windowHeight={600}
            className="share-button">
            <LinkedInIcon
              size={32}
              round />
          </LinkedInShareButton>

          <LinkedInShareCount
            url={shareUrl}
            className="share-count">
            {count => count}
          </LinkedInShareCount>
        </div>

        <div className="network-container">
          <PinterestShareButton
            url={shareUrl}
            windowWidth={1000}
            windowHeight={730}
            className="share-button">
            <PinterestIcon
              size={32}
              round />
          </PinterestShareButton>

          <PinterestShareCount
            url={shareUrl}
            className="share-count">
            {count => count}
          </PinterestShareCount>
        </div>

        <div className="network-container">
          <RedditShareButton
            url={shareUrl}
            title={title}
            windowWidth={660}
            windowHeight={460}
            className="share-button">
            <RedditIcon
              size={32}
              round />
          </RedditShareButton>

          <RedditShareCount
            url={shareUrl}
            className="share-count">
            {count => count}
          </RedditShareCount>
        </div>

        <div className="network-container">
          <TwitterShareButton
            url={shareUrl}
            title={title}
            className="share-button">
            <TwitterIcon
              size={32}
              round />
          </TwitterShareButton>

          <div className="share-count">
            &nbsp;
          </div>
        </div>

        <div className="network-container">
          <WhatsappShareButton
            url={shareUrl}
            title={title}
            className="share-button">
            <WhatsappIcon
              size={32}
              round />
          </WhatsappShareButton>

          <div className="share-count">
            &nbsp;
          </div>
        </div>
    </div>
    );
  }
}

export default Shares;