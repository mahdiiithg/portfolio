import React from 'react';
import styled from 'styled-components';
import {  graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faFacebookF,
  faLinkedinIn,
  faInstagram,
  faYoutube,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

const Email = styled.a`
  color: var(--text-highlight);
  font-size: 1.6rem;
  position: relative;
  font-weight: 600;
  text-decoration: none;
  margin-bottom: 4rem;
  transition: color 0.2s ease-out;

  @media ${props => props.theme.mediaQueries.medium} {
    font-size: 1.8rem;
  }

  @media ${props => props.theme.mediaQueries.small} {
    font-size: 1.7rem;
  }

  @media ${props => props.theme.mediaQueries.smallest} {
    font-size: 1rem;
  }
`;

const SocialWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5rem 0;

  @media ${props => props.theme.mediaQueries.medium} {
    display: block;
    margin: 3rem 0;
  }

  @media ${props => props.theme.mediaQueries.small} {
    margin: 3rem 0;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  border-radius: 50%;
  width: 4.5rem;
  height: 4.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--primary-light);
  margin: 0 1.5rem;
  transition: all 0.2s ease-out;

  &:hover {
    background-color: var(--primary);
    border-color: var(--primary);
  }

  @media ${props => props.theme.mediaQueries.medium} {
    width: 4rem;
    height: 4rem;
  }

  @media ${props => props.theme.mediaQueries.small} {
    width: 3.5rem;
    height: 3.5rem;
    margin: 0 1rem;
    border: 1px solid var(--primary-light);
  }

  @media ${props => props.theme.mediaQueries.smallest} {
    width: 3rem;
    height: 3rem;
    margin: 0 0.3rem;
    padding: 0px 6px;
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  color: var(--text-highlight);
  font-size: 2.2rem;
  transition: color 0.2s ease-out;

  ${StyledLink}:hover & {
    color: var(--background);
  }

  @media ${props => props.theme.mediaQueries.medium} {
    font-size: 2rem;
  }

  @media ${props => props.theme.mediaQueries.small} {
    font-size: 1.3rem;
  }

  @media ${props => props.theme.mediaQueries.smaller} {
    font-size: 1.3rem;
  }
`;

const Social = (props) => {

console.log('props', props);
  return (
    <div>
        <div>
        <Email href={`mailto:${props.data.site.siteMetadata.social.email}`}>
        {props.data.site.siteMetadata.social.email}
      </Email>
      <SocialWrapper>
        <StyledLink
          rel="noreferrer"
          target="_blank"
          aria-label="Github"
          href={`https://github.com/${props.data.site.siteMetadata.social.github}`}
        >
          <StyledIcon icon={faGithub} />
        </StyledLink>
        <StyledLink
          rel="noreferrer"
          target="_blank"
          aria-label="Linkedin"
          href={`https://www.linkedin.com/in/${
            props.data.site.siteMetadata.social.linkedin
          }`}
        >
          <StyledIcon icon={faLinkedinIn} />
        </StyledLink>
        <StyledLink
          rel="noreferrer"
          target="_blank"
          aria-label="Youtube"
          href={`https://www.youtube.com/c/${props.data.site.siteMetadata.social.youtube}`}
        >
          <StyledIcon icon={faYoutube} />
        </StyledLink>
        <StyledLink
          rel="noreferrer"
          target="_blank"
          aria-label="Instagram"
          href={`https://www.instagram.com/${
            props.data.site.siteMetadata.social.instagram
          }/`}
        >
          <StyledIcon icon={faInstagram} />
        </StyledLink>
        <StyledLink
          rel="noreferrer"
          target="_blank"
          aria-label="Twitter"
          href={`https://www.twitter.com/${props.data.site.siteMetadata.social.twitter}`}
        >
          <StyledIcon icon={faTwitter} />
        </StyledLink>
        <StyledLink
          rel="noreferrer"
          target="_blank"
          aria-label="Facebook"
          href={`https://www.facebook.com/${props.data.site.siteMetadata.social.facebook}`}
        >
          <StyledIcon icon={faFacebookF} />
        </StyledLink>
      </SocialWrapper>
      </div>
    </div>
  );
};



export default Social;
