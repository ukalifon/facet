// api timeout - 20 seconds
export const DEFAULT_API_REQUEST_TIMEOUT = 20 * 1000;
// create cluster button timeout
export const DEFAULT_CREATE_CLUSTER_BUTTON_SHOW_TIMEOUT = 60 * 1000;
// save button timeout - 30 seconds
export const DEFAULT_SAVE_BUTTON_TIMEOUT = 30 * 1000;
// timeout for hosts to boot and register - 10 minutes
export const HOST_REGISTRATION_TIMEOUT = 20 * 60 * 1000;
// host discovery and subnet discovery timeout - 30 seconds
export const HOST_DISCOVERY_TIMEOUT = 30 * 1000;
// timeout for validate changes - 10 seconds
export const VALIDATE_CHANGES_TIMEOUT = 10 * 1000;
// timeout for start installation to be enabled
export const START_INSTALLATION_TIMEOUT = 2.5 * 60 * 1000;
// timeout for dhcp vip allocation - 2 minutes
export const DYNAMIC_ADDRESSES_TIMEOUT = 2 * 60 * 1000;
// timeout for install preparation - 2 minutes
export const INSTALL_PREPARATION_TIMEOUT = 4 * 60 * 1000;
// timeout for generating ISO
export const GENERATE_ISO_TIMEOUT = 2 * 60 * 1000;
// timeout for downloading files
export const FILE_DOWNLOAD_TIMEOUT = 60 * 1000;
// timeout for downloading the ISO image
export const ISO_DOWNLOAD_TIMEOUT = 60 * 60 * 1000;
// timeout for cluster installation to finish - 2 hours (takes long on staging!)
export const CLUSTER_CREATION_TIMEOUT = 120 * 60 * 1000;
// searching for majority group can take up to 2 minutes
export const HOSTS_DISCOVERY_TIMEOUT = 2.5 * 60 * 1000;
// time for "Next" to be enabled
export const PRESS_NEXT_TIMEOUT = 60 * 1000;
// time for the newly registered host to have a "role" column
export const HOST_ROLE_COLUMN = 15 * 1000;
