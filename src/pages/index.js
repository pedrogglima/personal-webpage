import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="mt-6"></div>
    <div className="grid md:grid-cols-12 mx-4">
      <div className="md:col-start-5 md:col-span-4 text-center">
        <StaticImage
          src="../images/me-about.jpeg"
          width={200}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Me - photo"
          style={{ marginBottom: `1.45rem`, borderRadius: "100%" }}
        />
      </div>
      <div className="md:col-start-5 md:col-span-4">
        <div className="border border-white col-start-3 col-end-10 p-4 rounded-xl mr-auto">
          <p className="leading-tight">
            Hi! My name is Pedro. I'm a Computer Science working mainly with web
            development. This is my personal webpage and portfolio. I'm
            currently located in São Paulo, Brazil.
          </p>
        </div>
      </div>
      <div className="md:col-start-2 md:col-span-10">
        <ul>
          <li>
            <div className="border border-white col-start-3 col-end-10 p-4 rounded-xl my-4 mr-auto">
              <h3 className="font-semibold text-lg mb-1 underline">
                (2017-2021) - GL Consultoria
              </h3>
              <p>
                On my currently job I had work mainly with web development, but
                some no-programming activities are/were:
              </p>
              <ul className="list-disc ml-4">
                <li>
                  Helping with the integration of a new system for the company.
                  The old system was outdated and without assistence.
                </li>
                <li>
                  Participating on meetings and electronic trading system for
                  acquiring new services.
                </li>
                <li>
                  Participing as coordinator for activities that the company was
                  contract for. The responsibilities involved usually are:
                  <ul className="list-disc ml-4">
                    <li>
                      Traveling and preparing the place where the service will
                      be done.
                    </li>
                    <li>
                      Giving training for new incomers about the procedures of
                      the job.
                    </li>
                    <li>
                      Handling occasional problems that may raise during the
                      service.
                    </li>
                    <li>
                      Making the employees payment for the contracted service -
                      the service duration is no longer than one day of work.
                    </li>
                  </ul>
                </li>
                <li>
                  Elaborating questions with topic on Technology. This questions
                  are used on the services that the company is contract for.
                </li>
              </ul>
              <br />
              <p>
                When not working with no-programming activities I had the chance
                to work with some lasted web technology demonstrated on the
                following pet projects:
              </p>
              <ul className="list-disc ml-4 space-y-4">
                <li>
                  <h3 className="font-semibold text-md mb-1">
                    <span className="underline">Chute do Brasileirao</span>
                    {" - "}
                    <span className="text-sm italic">check out on </span>

                    {
                      <Link to="https://github.com/pedrogglima/chute-do-brasileirao">
                        <FontAwesomeIcon icon={faGithub} size="1x" />
                      </Link>
                    }
                  </h3>
                  <p>
                    This is a small Ruby on Rails website to show informations
                    about the CBF (a brazillian soccer championship). To
                    accomplish that I schedule a job to scrap data from the CBF
                    official page regularly. The webpage also let you bet on the
                    score for the matches of the day. Some noticeable features
                    of this project are:
                  </p>
                  <ul className="list-disc ml-8">
                    <li>
                      Because the scraped data doesn't change often, I manually
                      fetch the data on database and cache it on Redis. To be
                      more precisely, I cache the partial view with data. It's
                      very similar to how Rails cache partials, the difference
                      here is that I don't hit the database everytime to check
                      for updates.
                    </li>
                    <li>
                      I work with Active Storage to save the Team's flag. When
                      scraping data we save the URL for accessing the Team's
                      flag image. Later, using a Sidekiq job, we download it,
                      locally, and resize it, for performance reasons, then we
                      save on AWS S3.
                    </li>
                    <li>
                      I use the framework StimulusJS to handle the library
                      SwiperJS to create sliders for the next/previous
                      championship's matches. While SwiperJS offers a great API
                      for working with sliders, it doesn't offer the logic to
                      load dynamically data to the sliders.
                    </li>
                    <li>
                      The website let you login with Twitter or Google accounts.
                      I also create an API, with api-key for login, to offer the
                      scraped data.
                    </li>
                    <li>
                      You can find more info about the project on the README
                      page on github.
                    </li>
                  </ul>
                  <p>This project was build with:</p>

                  <ul className="list-disc ml-8">
                    <li>Ruby on Rails</li>
                    <li>StimulusJS</li>
                    <li>Bootstrap CSS</li>
                    <li>Postgres</li>
                    <li>Redis</li>
                    <li>Sidekiq</li>
                    <li>RabbitMQ</li>
                    <li>Docker</li>
                    <li>Nginx</li>
                  </ul>
                </li>
                <li>
                  <h3 className="font-semibold text-md mb-1">
                    <span className="underline">ScrapCbf</span>
                    {" - "}
                    <span className="text-sm italic">check out on </span>

                    {
                      <Link to="https://github.com/pedrogglima/scrap-cbf">
                        <FontAwesomeIcon icon={faGithub} size="1x" />
                      </Link>
                    }
                  </h3>
                  <p>
                    This project is a Ruby gem useful for scraping data from the{" "}
                    {
                      <Link
                        className="underline"
                        to="https://www.cbf.com.br/futebol-brasileiro/competicoes/campeonato-brasileiro-serie-a/2021"
                      >
                        CBF official page
                      </Link>
                    }
                    . Some of the data scraped are: championship's matches,
                    ranking table and teams. The CBF page has data from the
                    championship 2012 until the current one. They also update,
                    daily, the matches and ranking table for the current
                    championship. This project was build with:
                  </p>
                  <ul className="list-disc ml-8">
                    <li>Ruby</li>
                    <li>Nokogiri (for scraping data)</li>
                  </ul>
                </li>
                <li>
                  <h3 className="font-semibold text-md mb-1">
                    <span className="underline">ScrapCbfRecord</span>
                    {" - "}
                    <span className="text-sm italic">check out on </span>

                    {
                      <Link to="https://github.com/pedrogglima/scrap-cbf-record">
                        <FontAwesomeIcon icon={faGithub} size="1x" />
                      </Link>
                    }
                  </h3>
                  <p>
                    This project is a Ruby gem and complements the gem ScrapCbf.
                    It gets ScrapCbf's output and saves on database. Right now,
                    it only has support for the ORM Active Record. This project
                    offers some flexibility on editing the data before saving:
                    it will let you name the models for the scraped entities,
                    rename the entities's attributes, delete the entities's
                    attributes and create or not database associations between
                    entities's attributes.
                  </p>
                </li>
                <li>
                  <h3 className="font-semibold text-md mb-1">
                    <span className="underline">Personal Webpage</span>
                    {" - "}
                    <span className="text-sm italic">check out on </span>

                    {
                      <Link to="https://github.com/pedrogglima/personal-webpage">
                        <FontAwesomeIcon icon={faGithub} size="1x" />
                      </Link>
                    }
                  </h3>
                  <p>
                    This is my personal webpage builded with Gatsby. I'm still
                    building it and right now I have only this page, but I plan
                    to add a page for post my personal experiences and thoughts.
                    This project was build with:
                  </p>
                  <ul className="list-disc ml-8">
                    <li>React</li>
                    <li>Tailwind CSS</li>
                    <li>Docker</li>
                    <li>Nginx</li>
                  </ul>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div className="border border-white col-start-3 col-end-10 p-4 rounded-xl my-4 mr-auto">
              <h3 className="font-semibold text-lg mb-1 underline">
                (2012-2017) - Graduation in Computer Science from UEL
                (Universidade Estadual de Londrina)
              </h3>
              <p>
                My final thesis was on the field of Computer Security. The
                thesis's main idea consisted of applying the{" "}
                {
                  <Link
                    className="underline"
                    to="https://en.wikipedia.org/wiki/Modularity_(networks)"
                  >
                    modularity algorithm
                  </Link>
                }{" "}
                to a dataset of alerts generated by an{" "}
                {
                  <Link
                    className="underline"
                    to="https://en.wikipedia.org/wiki/Modularity_(networks)"
                  >
                    IDS (Intrusion Detection System)
                  </Link>
                }{" "}
                . This dataset was generated during a CTF contest (CTF is a
                cyber hacking competition that stand for Capture the Flag) in
                2008, and the winner team gave an interview explaning how they
                proceeded to hack the computers located on a private network and
                capture the flag. To apply the modularity algorithm on the
                dataset we had to create a{" "}
                {
                  <Link
                    className="underline"
                    to="https://en.wikipedia.org/wiki/Graph_(discrete_mathematics)"
                  >
                    Graph
                  </Link>
                }{" "}
                using the alerts's IP address Source and Destiny. The result
                from applying the modularity algorithm on this graph, and with
                the help of an algorithm for visualizing graphs, we obtained the
                following image:
              </p>
              <div className="text-center my-6">
                <StaticImage
                  src="../images/tcc-image.jpg"
                  width={400}
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Tcc image"
                  style={{ borderRadius: "10px" }}
                />
                <p className="text-xs italic">
                  See notes 1 and 2 about the image.
                </p>
              </div>
              <p>
                Short description of the image: the vertices represent computers
                (we call them hosts for now on) and the edges the interactions
                among them. The colours are added by the algorithm for
                visualizing graphs and used to distinguish group of hosts with
                common interactions among them (these group are the result of
                applying the modularity algorithm to the graph). The vertices
                with high number of edges and isolated from the group of
                vertices are the hosts that were compromised or have experienced
                multiple attempts of attack.
              </p>
              <br />
              <p>
                Final, with the detailed interview given by the winner team of
                the CTF contest we could understand how the attacks and
                compromises were made, and, also, prove our hypotheses from
                solely analyzing the image of the graph. From the image we were
                able to identify the hosts that were compromised and the ones
                under attack. A real-time and interactively application using
                this technique would be able to show, visually, the
                chronological order of attacks and compromised hosts.
              </p>
              <br />
              <p className="text-sm italic">
                Note 1.: I had to reduce the quality of the image because of the
                file size. Because of that, one edge is missing connecting the
                green vertice isolated and closest to the red vertices, to the
                red vertice isolated and centered between the group of red
                vertices and the group of red and purple vertices. This edge is
                important because it identify the first computer comprimised and
                the connection to the second one compromised.
              </p>
              <br />
              <p className="text-sm italic">
                Note 2.: Because this is a small and no-interactive image, I had
                to remove the vertice's IP address from the the image. The IP
                addresses are useful to identify each computer on the network
                and, also, to discovery the compromised computers using the
                detailed interview given by the winner team of the CTF contest.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </Layout>
)

export default IndexPage
