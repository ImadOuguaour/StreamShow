import React, { memo } from 'react'

const Error: React.FC<{error : string}> = ({error}) => {
  return (
    <div className="text-2xl font-bold mb-4 text-white">{error}</div>
  )
}

export default memo(Error);
