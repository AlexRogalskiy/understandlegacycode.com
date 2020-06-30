import React from "react"
import styled from "styled-components"

class CTA extends React.Component {
  componentDidMount() {
    const uid = "1c42a88117"

    const script = document.createElement("script")
    script.async = true
    script.src = `https://understandlegacycode.ck.page/${uid}/index.js`
    script.setAttribute("data-uid", uid)
    this.signupForm.appendChild(script)
  }

  render() {
    return <Form ref={el => (this.signupForm = el)}></Form>
  }
}

class ComingSoonCTA extends React.Component {
  componentDidMount() {
    const uid = "ee438164c6"

    const script = document.createElement("script")
    script.async = true
    script.src = `https://understandlegacycode.ck.page/${uid}/index.js`
    script.setAttribute("data-uid", uid)
    this.signupForm.appendChild(script)
  }

  render() {
    return <div ref={el => (this.signupForm = el)}></div>
  }
}

const Form = styled.div`
  .formkit-form {
    transform: rotate(-1.5deg);
  }

  [data-style="minimal"] {
    transform: rotate(1.5deg);
    padding: 20px 40px !important;
  }

  .formkit-modal {
    transform: rotate(1.5deg);
  }

  .formkit-background {
    opacity: 0.25;
  }

  .formkit-header h1,
  .formkit-subheader p {
    color: black !important;
  }
`

export default CTA
export { ComingSoonCTA }
