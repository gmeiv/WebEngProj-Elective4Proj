import { EE } from "./EE"

describe("EE Department Data", () => {
  describe("Basic Information", () => {
    it("should have correct department code", () => {
      expect(EE.code).toBe("EE")
    })

    it("should have valid title", () => {
      expect(EE.title).toBe("ELECTRICAL ENGINEERING")
      expect(EE.title).not.toBe("")
    })

    it("should have valid subtitle", () => {
      expect(EE.subtitle).toBe("Bachelor of Science in Electrical Engineering")
      expect(EE.subtitle).not.toBe("")
    })
  })

  describe("Theme Configuration", () => {
    it("should have theme object", () => {
      expect(EE.theme).toBeDefined()
    })

    it("should have valid accent hex color code", () => {
      expect(EE.theme.accentHex).toMatch(/^#[0-9A-F]{6}$/i)
      expect(EE.theme.accentHex).toBe("#FF4500")
    })
  })

  describe("Images Configuration", () => {
    it("should have images object", () => {
      expect(EE.images).toBeDefined()
    })

    it("should have all required image paths", () => {
      const requiredImages = ["heroLeft", "heroBig", "heroSmall1", "heroSmall2", "peo", "watermark"]
      requiredImages.forEach((img) => {
        expect(EE.images).toHaveProperty(img)
        expect((EE.images as Record<string, string>)[img]).not.toBe("")
      })
    })

    it("should have proper image path format", () => {
      expect(EE.images.heroLeft).toContain("/departments/EE/")
      expect(EE.images.heroBig).toContain("/departments/EE/")
    })
  })

  describe("Program Overview", () => {
    it("should have program overview section", () => {
      expect(EE.programOverview).toBeDefined()
    })

    it("should have subtitle", () => {
      expect(EE.programOverview.subtitle).toBe("Program Overview")
    })

    it("should have content items with required fields", () => {
      expect(EE.programOverview.contents).toBeDefined()
      expect(Array.isArray(EE.programOverview.contents)).toBe(true)
      expect(EE.programOverview.contents.length).toBeGreaterThan(0)

      EE.programOverview.contents.forEach((content) => {
        expect(content).toHaveProperty("heading")
        expect(content).toHaveProperty("text")
        expect(content.heading).not.toBe("")
        expect(content.text).not.toBe("")
      })
    })

    it("should have valid statistics", () => {
      expect(EE.programOverview.stats).toBeDefined()
      expect(EE.programOverview.stats.nonTeaching).toBe(0)
      expect(EE.programOverview.stats.faculty).toBe(16)
      expect(EE.programOverview.stats.students).toBe(555)
      expect(EE.programOverview.stats.faculty).toBeGreaterThan(0)
      expect(EE.programOverview.stats.students).toBeGreaterThan(0)
    })
  })

  describe("PEO (Program Educational Objectives)", () => {
    it("should have PEO section", () => {
      expect(EE.peo).toBeDefined()
    })

    it("should have PEO title and subtitle", () => {
      expect(EE.peo.title).toBe("Program Educational Objectives (PEO)")
      expect(EE.peo.subtitle).not.toBe("")
    })

    it("should have at least 3 PEO bullets", () => {
      expect(EE.peo.bullets).toBeDefined()
      expect(Array.isArray(EE.peo.bullets)).toBe(true)
      expect(EE.peo.bullets.length).toBeGreaterThanOrEqual(3)
    })

    it("should have non-empty bullet text", () => {
      EE.peo.bullets.forEach((bullet) => {
        expect(bullet).not.toBe("")
        expect(typeof bullet).toBe("string")
      })
    })
  })

  describe("SO (Student Outcomes)", () => {
    it("should have SO section", () => {
      expect(EE.so).toBeDefined()
    })

    it("should have SO title", () => {
      expect(EE.so.title).toBe("Student Outcomes (SO)")
    })

    it("should have at least 10 outcomes", () => {
      expect(EE.so.outcomes).toBeDefined()
      expect(Array.isArray(EE.so.outcomes)).toBe(true)
      expect(EE.so.outcomes.length).toBeGreaterThanOrEqual(10)
    })

    it("should have valid outcome objects with required fields", () => {
      EE.so.outcomes.forEach((outcome) => {
        expect(outcome).toHaveProperty("title")
        expect(outcome).toHaveProperty("text")
        expect(outcome).toHaveProperty("iconUrl")
        expect(outcome.title).not.toBe("")
        expect(outcome.text).not.toBe("")
        expect(outcome.iconUrl).not.toBe("")
      })
    })

    it("should have valid titles (A-J)", () => {
      const expectedTitles = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
      EE.so.outcomes.forEach((outcome, index) => {
        if (index < expectedTitles.length) {
          expect(outcome.title).toBe(expectedTitles[index])
        }
      })
    })
  })

  describe("Curriculum", () => {
    it("should have curriculum section", () => {
      expect(EE.curriculum).toBeDefined()
    })

    it("should have curriculum title", () => {
      expect(EE.curriculum.title).toBe("Curriculum Overview")
    })

    it("should have years array", () => {
      expect(EE.curriculum.years).toBeDefined()
      expect(Array.isArray(EE.curriculum.years)).toBe(true)
      expect(EE.curriculum.years.length).toBeGreaterThan(0)
    })

    it("should have valid year objects with required fields", () => {
      EE.curriculum.years.forEach((year) => {
        expect(year).toHaveProperty("id")
        expect(year).toHaveProperty("label")
        expect(year).toHaveProperty("terms")
        expect(year.id).not.toBe("")
        expect(year.label).not.toBe("")
        expect(Array.isArray(year.terms)).toBe(true)
      })
    })

    it("should have courses in each term", () => {
      EE.curriculum.years.forEach((year) => {
        year.terms.forEach((term) => {
          expect(term).toHaveProperty("name")
          expect(term).toHaveProperty("courses")
          expect(Array.isArray(term.courses)).toBe(true)
          expect(term.courses.length).toBeGreaterThan(0)
        })
      })
    })

    it("should have valid course objects with required fields", () => {
      EE.curriculum.years[0].terms[0].courses.forEach((course) => {
        expect(course).toHaveProperty("code")
        expect(course).toHaveProperty("title")
        expect(course).toHaveProperty("lec_units")
        expect(course).toHaveProperty("lec_hours")
        expect(course).toHaveProperty("lab_units")
        expect(course).toHaveProperty("lab_hours")
        expect(course.code).not.toBe("")
        expect(typeof course.lec_units).toBe("number")
        expect(typeof course.lab_units).toBe("number")
      })
    })

    it("should have non-negative unit and hour values", () => {
      EE.curriculum.years[0].terms[0].courses.forEach((course) => {
        expect(course.lec_units).toBeGreaterThanOrEqual(0)
        expect(course.lab_units).toBeGreaterThanOrEqual(0)
        expect(course.lec_hours).toBeGreaterThanOrEqual(0)
        expect(course.lab_hours).toBeGreaterThanOrEqual(0)
      })
    })
  })

  describe("Faculty Section", () => {
    it("should have faculty section", () => {
      expect(EE.faculty).toBeDefined()
    })

    it("should have faculty members array", () => {
      expect(EE.faculty.members).toBeDefined()
      expect(Array.isArray(EE.faculty.members)).toBe(true)
    })

    it("should have valid faculty member objects", () => {
      EE.faculty.members.forEach((member) => {
        expect(member).toHaveProperty("name")
        expect(member).toHaveProperty("role")
        expect(member.name).not.toBe("")
        expect((member as Record<string, unknown>).role).not.toBe("")
      })
    })
  })

  describe("Careers Section", () => {
    it("should have careers section", () => {
      expect(EE.careers).toBeDefined()
    })

    it("should have careers title", () => {
      expect(EE.careers.title).toBe("Career Opportunities")
    })

    it("should have career categories array", () => {
      expect((EE.careers as Record<string, unknown>).categories).toBeDefined()
      const categories = (EE.careers as Record<string, unknown>).categories as unknown[]
      expect(Array.isArray(categories)).toBe(true)
      expect(categories.length).toBeGreaterThan(0)
    })

    it("should have valid career category objects with cards", () => {
      const categories = (EE.careers as Record<string, unknown>).categories as Array<{title: string, cards: unknown[]}>
      categories.forEach((category) => {
        expect(category).toHaveProperty("title")
        expect(category).toHaveProperty("cards")
        expect(category.title).not.toBe("")
        expect(Array.isArray(category.cards)).toBe(true)
        expect(category.cards.length).toBeGreaterThan(0)
      })
    })
  })
})
