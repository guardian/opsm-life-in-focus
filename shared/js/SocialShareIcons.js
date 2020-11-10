import React from 'preact'; 
//import {GA} from "../../../actions/ga";


// Component Documentation 
// https://www.npmjs.com/package/react-share
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    LinkedinIcon,
    LinkedinShareButton,
    EmailShareButton,
    EmailIcon,
    PinterestShareButton,
    PinterestIcon
  } from 'react-share';


// To DO: 
// Split each social option into components!
let shareUrl=null, title=null, iconSize=32;
export default class SocialBar extends React.Component {

    constructor(props){
        super(props);
        shareUrl = this.props.url;
        iconSize = this.props.iconSize || iconSize;
        // console.log('SocialBar mount', shareUrl);
        title = this.props.title || '';
 
    } 
  render() {
    return(
        <ul className="list-unstyled">
            <li>
                <FacebookShareButton
                    url={shareUrl} 
                    quote={title}
                    
                >
                    <FacebookIcon
                        size={iconSize}
                        round 
                    />
                </FacebookShareButton>
                </li>
            <li>
                <TwitterShareButton
                    url={shareUrl}
                    title={title}
                    
                    
                    >
                    <TwitterIcon
                    size={iconSize}
                    round />
                </TwitterShareButton>
                </li>
            <li>
                <EmailShareButton
                    url={shareUrl}
                    title={title}>
                    <EmailIcon size={iconSize} round></EmailIcon>
                </EmailShareButton>
            </li>
            <li>
                <LinkedinShareButton
                    url={shareUrl}
                    title={title}
                    >
                    <LinkedinIcon
                    size={iconSize}
                    round />
                </LinkedinShareButton>
                </li>            
            <li>
                <PinterestShareButton 
                    url={shareUrl}
                    title={title}>
                    <PinterestIcon size={iconSize} round></PinterestIcon>
                </PinterestShareButton>
            </li>

            </ul>
    )
  }
}
