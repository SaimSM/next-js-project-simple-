import React from 'react'
import Component from '../components/link'

export default function page() {
  return (
    <div>
      <p>
        this is the contact page!
        <br />
        {/* <a href="/">Go back</a> */}
      </p>
      <form>
        <label htmlFor="fname">First Name:</label><br />
        <input type="text" id="fname" name="fname" /><br />
        <label htmlFor="lname">Last Name:</label><br />
        <input type="text" id="lname" name="lname" /><br />
        <input type="submit" value="Submit" />
      </form>

      <table>
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
        </tr>
        <tr>
          <td>Jill</td>
          <td>Smith</td>
        </tr>
        <tr>
          <td>Eve</td>
          <td>Jackson</td>
        </tr>
      </table>

      <nav>

        <Component />
      </nav>

    </div>
  )
}
