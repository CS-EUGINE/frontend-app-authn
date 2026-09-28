import React from 'react';

/**
 * Attribution and copyright under the sign-in and register forms. Both pages
 * render inside Logistration, so this is mounted once there rather than in
 * each form.
 */
const PoweredBy = () => (
  <div className="tw:mt-8 tw:pt-5 tw:border-t tw:border-[#E1EBF0] tw:text-center tw:text-sm tw:text-gray-500">
    <p className="tw:mb-1">
      Powered by{' '}
      <a
        href="https://www.cloudswyft.com"
        target="_blank"
        rel="noopener noreferrer"
        className="tw:font-semibold tw:text-[#15376D] tw:hover:underline"
      >
        CloudSwyft
      </a>
    </p>
    <p className="tw:mb-0">
      Copyright &copy; {new Date().getFullYear()} CloudSwyft. All Rights Reserved.
    </p>
  </div>
);

export default PoweredBy;
