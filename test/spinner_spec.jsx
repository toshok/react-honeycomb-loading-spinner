import React from 'react'
import { findDOMNode } from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import HexSpinner from '../src'
import { expect } from 'chai'

describe('HexSpinner', () => {
  const RenderedHexSpinner = TestUtils.renderIntoDocument(
      <HexSpinner />
    )
  const HexSpinnerElem = findDOMNode(RenderedHexSpinner)

  it('Should have the correct HexSpinner element', () => {
    expect(HexSpinnerElem.className).to.equal('hexspinner')
  })
  it('Should have the HexSpinner socket', () => {
    expect(HexSpinnerElem.querySelector('.socket')).to.be.ok
  })
  it('Should have the correct number of gels', () => {
    expect(HexSpinnerElem.querySelectorAll('.gel').length).to.equal(37)
  })
  it('Should have the correct number of hex grids for each gel', () => {
    const gel = HexSpinnerElem.querySelector('.gel:first-child')
    expect(gel.querySelectorAll('.hex-brick').length).to.equal(3)
  })
})
