"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { ChevronDown, ChevronUp, FileText, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ExpandableSectionProps {
  title: string
  children: React.ReactNode
}

function ExpandableSection({ title, children }: ExpandableSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card className="mb-4">
      <CardHeader>
        <Button
          variant="ghost"
          className="w-full justify-between p-0 h-auto"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <span className="flex-1 min-w-0 text-left">
            <CardTitle className="whitespace-normal break-words text-left text-base sm:text-sm font-semibold leading-snug">
              {title}
            </CardTitle>
          </span>
          {isExpanded ? <ChevronUp className="h-5 w-5 flex-shrink-0" /> : <ChevronDown className="h-5 w-5 flex-shrink-0" />}
        </Button>
      </CardHeader>
      {isExpanded && <CardContent>{children}</CardContent>}
    </Card>
  )
}

interface ProgramResourcesProps {
  programName: string
  catalogYear?: string
  accreditations?: string[]
}

/**
 * Displays program resources with download links that are disabled if the file does not exist.
 * @param {ProgramResourcesProps} props - The program resource props.
 */
export default function ProgramResources(props: ProgramResourcesProps) {
  const {
    programName,
    catalogYear = "2024-2025",
    accreditations = [
      "ABET",
      "PACUCOA",
      "CHED Center of Excellence",
      "Philippine Technological Council",
      "PICAB",
      "AUN",
    ],
  } = props;
  const [fileExists, setFileExists] = useState({
    catalog: true,
    curriculum: true,
    brochure: true,
  })

  useEffect(() => {
    // Check if files exist in public folder using fetch (HEAD request)
    const checkFile = async (type: string, file: string) => {
      try {
        const res = await fetch(`/pdfs/${encodeURIComponent(programName)}/${file}`, { method: 'HEAD' })
        return res.ok
      } catch {
        return false
      }
    }
    (async () => {
      const [catalog, curriculum, brochure] = await Promise.all([
        checkFile('catalog', 'Course-Catalog.pdf'),
        checkFile('curriculum', 'Curriculum.pdf'),
        checkFile('brochure', 'Brochure.pdf'),
      ])
      setFileExists({ catalog, curriculum, brochure })
    })()
  }, [programName])

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">{programName} Program Resources</h2>

        <ExpandableSection title={`${programName} Course Catalog`}>
          <div className="flex flex-col sm:flex-row sm:items-start gap-3 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-center shrink-0 w-12 h-12">
              <FileText className="h-8 w-8 text-blue-600" />
            </div>
            <div className="flex-1 min-w-0 overflow-x-auto">
              <h4 className="font-semibold">
                {programName} Course Catalog {catalogYear}
              </h4>
              <p className="text-sm text-gray-600">Complete list of {programName} courses and descriptions</p>
              {/* Place your PDF in public/pdfs/<Program Folder>/Course-Catalog.pdf */}
              <Button
                variant="link"
                className="p-0 h-auto mt-2"
                asChild
                disabled={!fileExists.catalog}
                aria-disabled={!fileExists.catalog}
                title={fileExists.catalog ? undefined : 'File not available'}
              >
                <a
                  href={fileExists.catalog ? `/pdfs/${encodeURIComponent(programName)}/Course-Catalog.pdf` : undefined}
                  download={fileExists.catalog || undefined}
                  tabIndex={fileExists.catalog ? 0 : -1}
                  aria-disabled={!fileExists.catalog}
                  style={!fileExists.catalog ? { pointerEvents: 'none', color: '#aaa' } : {}}
                >
                  Download {programName} Catalog PDF
                </a>
              </Button>
              {!fileExists.catalog && (
                <p className="text-xs text-red-500 mt-1">File not available</p>
              )}
            </div>
          </div>
        </ExpandableSection>

        <ExpandableSection title={`${programName} Curriculum`}>
          <div className="flex flex-col sm:flex-row sm:items-start gap-3 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-center shrink-0 w-12 h-12">
              <FileText className="h-8 w-8 text-green-600" />
            </div>
            <div className="flex-1 min-w-0 overflow-x-auto">
              <h4 className="font-semibold">{programName} Program Curriculum</h4>
              <p className="text-sm text-gray-600">Detailed {programName} curriculum structure and requirements</p>
              {/* Place your PDF in public/pdfs/<Program Folder>/Curriculum.pdf */}
              <Button
                variant="link"
                className="p-0 h-auto mt-2"
                asChild
                disabled={!fileExists.curriculum}
                aria-disabled={!fileExists.curriculum}
                title={fileExists.curriculum ? undefined : 'File not available'}
              >
                <a
                  href={fileExists.curriculum ? `/pdfs/${encodeURIComponent(programName)}/Curriculum.pdf` : undefined}
                  download={fileExists.curriculum || undefined}
                  tabIndex={fileExists.curriculum ? 0 : -1}
                  aria-disabled={!fileExists.curriculum}
                  style={!fileExists.curriculum ? { pointerEvents: 'none', color: '#aaa' } : {}}
                >
                  Download {programName} Curriculum PDF
                </a>
              </Button>
              {!fileExists.curriculum && (
                <p className="text-xs text-red-500 mt-1">File not available</p>
              )}
            </div>
          </div>
        </ExpandableSection>

        <ExpandableSection title={`${programName} Program Brochure`}>
          <div className="flex flex-col sm:flex-row sm:items-start gap-3 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-center shrink-0 w-12 h-12">
              <FileText className="h-8 w-8 text-purple-600" />
            </div>
            <div className="flex-1 min-w-0 overflow-x-auto">
              <h4 className="font-semibold">{programName} Program Brochure</h4>
              <p className="text-sm text-gray-600">Overview of {programName} program highlights and opportunities</p>
              {/* Place your PDF in public/pdfs/<Program Folder>/Brochure.pdf */}
              <Button
                variant="link"
                className="p-0 h-auto mt-2"
                asChild
                disabled={!fileExists.brochure}
                aria-disabled={!fileExists.brochure}
                title={fileExists.brochure ? undefined : 'File not available'}
              >
                <a
                  href={fileExists.brochure ? `/pdfs/${encodeURIComponent(programName)}/Brochure.pdf` : undefined}
                  download={fileExists.brochure || undefined}
                  tabIndex={fileExists.brochure ? 0 : -1}
                  aria-disabled={!fileExists.brochure}
                  style={!fileExists.brochure ? { pointerEvents: 'none', color: '#aaa' } : {}}
                >
                  Download {programName} Brochure PDF
                </a>
              </Button>
              {!fileExists.brochure && (
                <p className="text-xs text-red-500 mt-1">File not available</p>
              )}
            </div>
          </div>
        </ExpandableSection>

        <ExpandableSection title={`${programName} Accreditation`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {accreditations.map((accreditation, index) => {
              const colors = ["text-yellow-600", "text-red-600", "text-blue-600", "text-green-600", "text-purple-600", "text-teal-600"]
              return (
                <div key={accreditation} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                  <Award className={`h-8 w-8 ${colors[index % colors.length]}`} />
                  <div>
                    <h4 className="font-semibold">{accreditation}</h4>
                    <p className="text-sm text-gray-600">{programName} Program Accreditation</p>
                  </div>
                </div>
              )
            })}
          </div>
        </ExpandableSection>
      </div>
    </section>
  )
}
