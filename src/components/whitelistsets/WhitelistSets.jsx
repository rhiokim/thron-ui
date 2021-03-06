import React from 'react'
import {Link, withRouter} from 'react-router'
import {Menu, MenuDivider, MenuItem, Popover, Position, Dialog, Button, AnchorButton, Intent} from "@blueprintjs/core"

class WhitelistSets extends React.Component {
  constructor() {
    super()

    this.toggleDialog = this.toggleDialog.bind(this)

    this.state = {
      whitelistSetId: undefined,
      isOpen: false
    }
  }

  ruleMenu = (
    <Menu>
      <MenuItem iconName="add" text="View" onClick={this.handleClick.bind(this, 'view')}/>
      <MenuItem iconName="add" text="Whitelists" onClick={this.handleClick.bind(this, 'rules')} />
      <MenuItem iconName="add" text="Edit" onClick={this.handleClick.bind(this, 'edit')}/>
      <MenuItem iconName="map" text="Plan" disabled={true} onClick={this.handleClick.bind(this, 'copy')} />
      <MenuItem iconName="map" text="Copy to Clipboard" disabled={true} onClick={this.handleClick.bind(this, 'copy')} />
      <MenuDivider />
      <MenuItem iconName="add" text="Export Rules" onClick={this.handleClick.bind(this, 'deactivate')} />
      <MenuItem iconName="map" text="Delete" onClick={this.handleClick.bind(this, 'delete')} />
    </Menu>
  )

  toggleDialog() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  handleClick(act) {
    const {whitelistSetId} = this.state
    switch (act) {
      case 'rules':
        this.props.router.push(`/whitelists/sets/${whitelistSetId}`)
      break
      case 'view':
        this.props.router.push(`/whitelistsets/${whitelistSetId}`)
      break
      case 'edit':
        this.props.router.push(`/whitelistsets/edit/${whitelistSetId}`)
      break
      case 'deactivate':
      break
      case 'delete':
        this.setState({ isOpen: true })
      break
      default:
      break
    }
  }

  render() {
    return (
      <div className="panel panel-flat">
        <div className="panel-heading">
          <h5 className="panel-title">Whitelist Sets<a className="heading-elements-toggle"><i className="icon-more"></i></a></h5>
          <div className="heading-elements">
            <AnchorButton href="#/whitelistsets/new" text="New" iconName="add" intent={Intent.PRIMARY}/>
          </div>
        </div>

        <div className="panel-body hidden">
          Example of a <code>bordered</code> table with <code>stiped</code> rows. Add <code>.table-bordered</code> and <code>.table-striped</code> classes to the base <code>.table</code> class for borders and row striping. This method works with all table border options.
        </div>

        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th className="col-lg-5">Description</th>
                <th className="col-lg-4">File</th>
                <th className="col-lg-2">Updated</th>
                <th className="col-lg-1"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Samsung SSO</td>
                <td>
                  <Link to={`/whitelistsets/${Math.random()}`}>samsung_sso.rules</Link>
                </td>
                <td>1 day ago</td>
                <td className="text-center">
                  <Popover content={this.ruleMenu} position={Position.BOTTOM_RIGHT}>
                    <a className="icon-menu9" onClick={() => this.setState({whitelistSetId: Math.random()})}></a>
                  </Popover>
                </td>
              </tr>
              <tr>
                <td>Samsung Mobile Site</td>
                <td>
                  <Link to={`/whitelistsets/${Math.random()}`}>samsung_mobile.rules</Link>
                </td>
                <td>3 months ago</td>
                <td className="text-center">
                  <Popover content={this.ruleMenu} position={Position.BOTTOM_RIGHT}>
                    <a className="icon-menu9" onClick={() => this.setState({whitelistSetId: Math.random()})}></a>
                  </Popover>
                </td>
              </tr>
              <tr>
                <td>Samsung SSG Site</td>
                <td>
                  <Link to="">samsung_ssg.rules</Link>
                </td>
                <td>2 weeks ago</td>
                <td className="text-center">
                  <Popover content={this.ruleMenu} position={Position.BOTTOM_RIGHT}>
                    <a className="icon-menu9"></a>
                  </Popover>
                </td>
              </tr>
              <tr>
                <td>Samsung Corporation Site</td>
                <td>
                  <Link to="">samsung_corp.rules</Link>
                </td>
                <td>34 seconds ago</td>
                <td className="text-center">
                  <Popover content={this.ruleMenu} position={Position.BOTTOM_RIGHT}>
                    <a className="icon-menu9"></a>
                  </Popover>
                </td>
              </tr>
              <tr>
                <td>Samsung Galaxy Note III Promotion</td>
                <td>
                  <Link to="">samsung_galaxy_note_promotion.rules</Link>
                </td>
                <td>12 hours ago</td>
                <td className="text-center">
                  <Popover content={this.ruleMenu} position={Position.BOTTOM_RIGHT}>
                    <a className="icon-menu9"></a>
                  </Popover>
                </td>
              </tr>
              <tr>
                <td>Samsung Camera Site</td>
                <td>
                  <Link to="">samsung_camera.rules</Link>
                </td>
                <td>3 days ago</td>
                <td className="text-center">
                  <Popover content={this.ruleMenu} position={Position.BOTTOM_RIGHT}>
                    <a className="icon-menu9"></a>
                  </Popover>
                </td>
              </tr>
              <tr>
                <td>Samsung Hauzen Site</td>
                <td>
                  <Link to="">samsung_hauzen.rules</Link>
                </td>
                <td>39 years ago</td>
                <td className="text-center">
                  <Popover content={this.ruleMenu} position={Position.BOTTOM_RIGHT}>
                    <a className="icon-menu9"></a>
                  </Popover>
                </td>
              </tr>
              <tr className="border-double"></tr>
            </tbody>
          </table>

          <div className="p-20 text-center">
            <ul className="pagination">
              <li><a href="#" className="legitRipple">‹</a></li>
              <li className="active"><a href="#" className="legitRipple">1</a></li>
              <li><a href="#" className="legitRipple">2</a></li>
              <li><a href="#" className="legitRipple">3</a></li>
              <li className="disabled"><a href="#">4</a></li>
              <li><a href="#" className="legitRipple">5</a></li>
              <li><a href="#" className="legitRipple">6</a></li>
              <li><a href="#" className="legitRipple">7</a></li>
              <li><a href="#" className="legitRipple">8</a></li>
              <li><a href="#" className="legitRipple">9</a></li>
              <li><a href="#" className="legitRipple">›</a></li>
            </ul>
          </div>

          <Dialog iconName="inbox" isOpen={this.state.isOpen} onClose={this.toggleDialog} title="Remove Ruleset">
            <div className="pt-dialog-body">
              Are you sure remove this ruleset?<br/>You can't restore this ruleset after delete.
            </div>
            <div className="pt-dialog-footer">
              <div className="pt-dialog-footer-actions">
                <Button text="No" />
                <Button intent={Intent.DANGER} onClick={this.toggleDialog} text="Sure" />
              </div>
            </div>
          </Dialog>
        </div>
      </div>
    )
  }
}

export default withRouter(WhitelistSets)
