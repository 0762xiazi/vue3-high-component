import {get} from '../util/request'
import '../mock/addressData'

function fetchCompanyAddresses () {
  // eslint-disable-next-line
  return get('/api/address/companyAddresses')
}

function fetchCompanyMailAddresses () {
  // eslint-disable-next-line
  return get(`/api/address/companyMailAddresses`)
}

function fetchTypeAddresses () {
  // eslint-disable-next-line
  return get(`/api/address/typeAddresses`)
}

function editClick ({addressData,addressType}){
  console.log('addressType',addressType)
  console.log('addressData',addressData)
}
// eslint-disable-next-line
export default {
  fetchCompanyAddresses,
  fetchCompanyMailAddresses,
  fetchTypeAddresses,
  editClick
}
