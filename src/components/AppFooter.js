import { useState,useEffect } from "react";

//utils
import ApiEndpoint1  from "../utlis/axiosConfig.js";
import UrlRedirect from "../utlis/redirect.js";

import AppFooter_movie_item1 from "./AppFooter_movie_item1.js";
import Appfooter_tag_component from "./Appfooter_tag_component.js";

// external function
import OpenExternalLinks from "../functions/open-external-link.js"

export default function AppFooter(props) {

  const [genres,setGenres] = useState([])
  const [countries,setCountries] = useState([])
  const [keywords,setKeywords] = useState([])

  const global_props = props.global_props;
  const application_socials = global_props['SiteData']['socials']
  
  useEffect(() => {
    async function fetchGenres() {
      try{
        const response = await ApiEndpoint1.get('/api/v1/genres/?random=true&total=16')
        setGenres(response.data)
      } catch (error) {
        console('Error fetching data: ',error)
      }
    }
    async function fetchCountries(){
      try{
        const response = await ApiEndpoint1.get('/api/v1/countries/?random=true&total=12')
        setCountries(response.data)
      } catch (error) {
        console.log('Error fetching data: ',error)
      }
    }
    async function fetchKeyword(){
      try{
        const response = await ApiEndpoint1.get('api/v1/keyword/?random=true&total=16')
        setKeywords(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchGenres();
    fetchCountries();
    fetchKeyword();
  }, [])

  return (
    <>
      <div>
        <div className="application_footer">
          <div className="up">
            <div className="footer-top-flex-container">
              <div className="footer-top-flex-item">
                <div className="footer_logo_or_name">
                  {global_props["SiteData"].application_name}
                </div>
                <div className="footer_description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam,....
                </div>
                <div className="footer_socials">
                  <div className="social_buttons social_buttons_footer">
                    <div onClick={() => OpenExternalLinks(application_socials.facebook)} className="social-network-button-1 flex_center bg-facebook">
                      <i className="fa fa-facebook"></i>
                    </div>

                    <div onClick={() => OpenExternalLinks(application_socials.whatsapp)} className="social-network-button-1 flex_center bg-whatsapp">
                      <i className="fa fa-whatsapp"></i>
                    </div>

                    <div onClick={() => OpenExternalLinks(application_socials.instagram)} className="social-network-button-1 flex_center bg-instagram">
                      <i className="fa fa-instagram"></i>
                    </div>

                    <div onClick={() => OpenExternalLinks(application_socials.twitter)} className="social-network-button-1 flex_center bg-twitter">
                      <i className="fa fa-twitter"></i>
                    </div>

                    <div onClick={() => OpenExternalLinks(application_socials.youtube)} className="social-network-button-1 flex_center bg-youtube">
                      <i className="fa fa-youtube"></i>
                    </div>

                    <div onClick={() => OpenExternalLinks(application_socials['rss-feed'])} className="social-network-button-1 flex_center bg-rss">
                      <i className="fa fa-rss"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-top-flex-item">
                <div className="title_style_1">MOVIES</div>
                <div className="line_divider_1"></div>
                <div className="footer_movie_category_flex">
                  {genres.map((genre) => (
                  <AppFooter_movie_item1 type="genre" key={genre.genre_id} name={genre.genre_name} UrlRedirect={UrlRedirect} />
                  ))}
                </div>
              </div>
              <div className="footer-top-flex-item">
                <div className="title_style_1">TV SHOWS (by country)</div>
                <div className="line_divider_1"></div>
                <div className="footer_movie_category_flex">
                  {countries.map((country) => (
                    <AppFooter_movie_item1 type="country" name={country.country_name} key={country.country_id} UrlRedirect={UrlRedirect} />
                  ))}
                </div>
              </div>
              <div className="footer-top-flex-item">
                <div className="title_style_1">KEYWORDS</div>
                <div className="line_divider_1"></div>
                <div className="footer_movie_category_flex">
                  {keywords.map((keyword) => (
                    <Appfooter_tag_component name={keyword.keyword_name} key={keyword.keyword_id} UrlRedirect={UrlRedirect} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="down">
            <hr />
            <div>
              <div>&copy; Copyright 2023. All Rights Reserved</div>
              <div>|</div>
              <div>
                Built by{" "}
                <a
                  className="built_by_me_link"
                  href="mailto:therealkayks@gmail.com"
                >
                  Kayks
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
