import { Component } from "react"
import Select from "../index"
import { shallow, mount, render } from "enzyme"

it('className', function () {
    const app = mount(<Select className="myclass" />)
    expect(app.find('.myclass').length).toEqual(1)
})
