import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'sonner'
import LeituraAnjoGuarda from '@/pages/LeituraAnjoGuarda'
import NotFound from '@/pages/NotFound'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LeituraAnjoGuarda />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster richColors position="top-right" />
    </>
  )
}

export default App
