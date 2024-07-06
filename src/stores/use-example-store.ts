import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
// import { Example } from '@/types/interface'
import { StorageEnum } from '@/types/enum'
import { _get} from '@/api/api-client'
// import { toast } from 'react-toastify'
import { getItem} from '@/utils/storage'

interface UseExampleStoreProps {
    example: string[] | null
    actions: {
      exampleAction: () => void
    }
  }

  const useExampleStore = create<UseExampleStoreProps>()(
    devtools((set) => ({
      example: getItem<string[] | null>(StorageEnum.Example) ?? null,
      actions: {
        exampleAction: async () => {
          await _get<unknown>('/example')
        },
      },
    })),
  )
  
  export const useExampleData = () => useExampleStore((state) => state.example)
  export const useExampleActions = () => useExampleStore((state) => state.actions)