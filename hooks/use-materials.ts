import { Material } from '@prisma/client'
import React from 'react'
import { Api } from '../services/api-client'

export const useMaterials = () => {
	const [materials, setMaterials] = React.useState<Material[]>([])
	const [loading, setLoading] = React.useState(true)

	React.useEffect(() => {
		async function fetchMaterials() {
			try {
				setLoading(true)
				const materials = await Api.materials.getAll()
				setMaterials(materials)
			} catch (error) {
				console.log(error)
			} finally {
				setLoading(false)
			}
		}

		fetchMaterials()
	}, [])

	return {
		materials,
		loading,
	}
}
