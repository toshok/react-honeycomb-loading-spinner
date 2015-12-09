import React from 'react/addons'
import HexSpinner from '../src'
import { expect } from 'chai'

const { TestUtils } = React.addons

describe('HexSpinner', () => {
  it('Should have the correct HexSpinner element', () => {
    const RenderedHexSpinner = TestUtils.renderIntoDocument(
      <HexSpinner />
    )
    const HexSpinnerElem = React.findDOMNode(RenderedHexSpinner)
    expect(HexSpinnerElem.className).to.equal('hexspinner')
  })
})
