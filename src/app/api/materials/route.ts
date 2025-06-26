import { NextResponse } from 'next/server'
import { prisma } from '@/prisma/prisma-client'

export async function GET() {
	const materials = await prisma.material.findMany()

	return NextResponse.json(materials)
}
