import React from "react";
import Layout from "../components/layouts/layout";
import Title from "../components/title";
//import { graphql, Link } from "gatsby";

const Typescale = ({ data }) => {
  var types = [];
  const Heading = props => {
    return React.createElement(`h${props.level}`, props, props.children);
  };
  for (var i = 1; i <= 6; i++) {
    types.push(
      <Heading level={i} key={i}>
        Heading {i}
      </Heading>
    );
  }

  return (
    <Layout>
      <Title pageName="James Maclean" />
      <span className="test-test">test</span>
      {types}
    </Layout>
  );
};

export default Typescale;
