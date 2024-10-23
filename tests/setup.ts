import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import 'matchmedia-polyfill'; 
import 'matchmedia-polyfill/matchMedia.addListener'; 


afterEach(() => {
  cleanup();
  console.log("cleaning up tests")
})