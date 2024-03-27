import semver from 'semver'

export const API_VERSION_KEY = 'api_version'

export const API_VERSION_VALUE = '1.0.0'

export const isApiVersionCompatible = (apiVersion) => {
  const version = fixApiVersion1(apiVersion)
  if (!semver.valid(version)) {
    return false
  }

  return semver.major(version) == semver.major(API_VERSION_VALUE)
}

export const isApiVersionEqual = (apiVersion) => {
  const version = fixApiVersion1(apiVersion)
  if (!semver.valid(version)) {
    return false
  }

  return semver.eq(version, API_VERSION_VALUE)
}

// For the legacy `api_version=1` not being made as correct semver format.
const fixApiVersion1 = (apiVersion) => (apiVersion == '1' ? '1.0.0' : apiVersion)
