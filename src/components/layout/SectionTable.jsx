import Button from "../Button/Button";
import "./SectionTable.scss";

const SectionTable = () => {
  return (
    <section className="sectionInfo">
      <table className="table" cellPadding={"0"} cellSpacing={"0"} border={0}>
        <tbody>
          <tr>
            <th>Customer Name</th>
            <th>Company</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Country</th>
            <th className="center">Status</th>
          </tr>
          <tr>
            <td>Jane Cooper</td>
            <td>Microsoft</td>
            <td>(225) 555-0118</td>
            <td>jane@microsoft.com</td>
            <td>United States</td>
            <td>
              <Button>Active</Button>
            </td>
          </tr>
          <tr>
            <td>Floyd Miles</td>
            <td>Yahoo</td>
            <td>(205) 555-0100</td>
            <td>floyd@yahoo.com</td>
            <td>Kiribati</td>
            <td>
              <Button inactive="inactive">Inactive</Button>
            </td>
          </tr>
          <tr>
            <td>Ronald Richards</td>
            <td>Adobe</td>
            <td>(302) 555-0107</td>
            <td>ronald@adobe.com</td>
            <td>Israel</td>
            <td>
              <Button inactive="inactive">Inactive</Button>
            </td>
          </tr>
          <tr>
            <td>Marvin McKinney</td>
            <td>Tesla</td>
            <td>(252) 555-0126</td>
            <td>marvin@tesla.com</td>
            <td>Iran</td>
            <td>
              <Button>Active</Button>
            </td>
          </tr>
          <tr>
            <td>Jerome Bell</td>
            <td>Google</td>
            <td>(629) 555-0129</td>
            <td>jerome@google.com</td>
            <td>Réunion</td>
            <td>
              <Button>Active</Button>
            </td>
          </tr>
          <tr>
            <td>Kathryn Murphy</td>
            <td>Microsoft</td>
            <td>(406) 555-0120</td>
            <td>kathryn@microsoft.com</td>
            <td>Curaçao</td>
            <td>
              <Button>Active</Button>
            </td>
          </tr>
          <tr>
            <td>Jacob Jones</td>
            <td>Yahoo</td>
            <td>(208) 555-0112</td>
            <td>jacob@yahoo.com</td>
            <td>Brazil</td>
            <td>
              <Button>Active</Button>
            </td>
          </tr>
          <tr>
            <td>Kristin Watson</td>
            <td>Facebook</td>
            <td>(704) 555-0127</td>
            <td>kristin@facebook.com</td>
            <td>Åland Islands</td>
            <td>
              <Button inactive="inactive">Inactive</Button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default SectionTable;
