import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="mt-6"></div>
    <div className="grid md:grid-cols-12">
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
    </div>
    <div className="grid md:grid-cols-12 mx-4">
      <div className="md:col-start-5 md:col-span-4">
        <p>
          Hi! My name is Pedro. I'm a Computer Science working mainly with web
          development. This is my personal webpage and portfolio. I'm currently
          located in São Paulo, Brazil.
        </p>
      </div>
    </div>
    <div className="mt-4"></div>
    <div className="grid md:grid-cols-12 mx-4 ml-10">
      <div className="md:col-start-5 md:col-span-4">
        <ul className="list-disc">
          <li>
            <div className="border border-white col-start-3 col-end-10 p-4 rounded-xl my-4 mr-auto">
              <h3 className="font-semibold text-lg mb-1 underline">
                Graduation 2012-2017
              </h3>
              <p className="leading-tight">
                Graduated in Computer Science from UEL (Universidade Estadual de
                Londrina).
              </p>
            </div>
          </li>
          <li>
            <div className="border border-white col-start-3 col-end-10 p-4 rounded-xl my-4 mr-auto">
              <h3 className="font-semibold text-lg mb-1 underline">
                GL Consultoria 2017-2021
              </h3>
              <p className="leading-tight text-justify">
                <ul className="list-disc ml-4">
                  <li>Help the company on the </li>
                </ul>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </Layout>
)

export default IndexPage
