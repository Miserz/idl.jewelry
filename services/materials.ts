import { Material } from '@prisma/client'
import { ApiRoutes } from './constants'
import { axiosInstance } from './instance'

export const getAll = async (): Promise<Material[]> => {
	return (await axiosInstance.get<Material[]>(ApiRoutes.MATERIALS)).data
}
