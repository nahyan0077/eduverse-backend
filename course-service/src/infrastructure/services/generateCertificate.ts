import { Request, Response } from 'express';
import PDFDocument from 'pdfkit';
import path from 'path';
import { findUserById, getCourseById } from '../../infrastructure/database/mongodb/repositories';
import fs from 'fs'

export const generateCertificate = async (req: Request, res: Response) => {
  const { courseId, userId } = req.query;

  console.log(req.query);
  

  if (!courseId || !userId) {
    return res.status(400).json({ message: 'CourseId and UserId are required' });
  }

  try {
    const courseData: any = await getCourseById(courseId as string);
    const userData = await findUserById(userId as string);
    

    if (!courseData || !userData) {
      return res.status(404).json({ message: 'Course or User not found' });
    }

    const doc = new PDFDocument({
        layout: 'landscape',
        size: 'A4',
      });

      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', `attachment; filename=certificate_${courseId}.pdf`);
  
      doc.pipe(res);
      
      // Helper to move to next line
      function jumpLine(doc: any, lines: any) {
        for (let index = 0; index < lines; index++) {
          doc.moveDown();
        }
      }
      
      doc.pipe(fs.createWriteStream('output.pdf'));
      
      doc.rect(0, 0, doc.page.width, doc.page.height).fill('#fff');
      
      doc.fontSize(10);
      
      // Margin
      const distanceMargin = 18;
      
      doc
        .fillAndStroke('#0e8cc3')
        .lineWidth(20)
        .lineJoin('round')
        .rect(
          distanceMargin,
          distanceMargin,
          doc.page.width - distanceMargin * 2,
          doc.page.height - distanceMargin * 2,
        )
        .stroke();
      
      // Header
      const maxWidth = 140;
      const maxHeight = 70;

      doc.image(path.join(__dirname, '../../../assets/winners.png'), doc.page.width / 2 - maxWidth / 2, 60, {
        fit: [maxWidth, maxHeight],
        align: 'center',
      });
      
      jumpLine(doc, 5)
      
      doc
        .font(path.join(__dirname, '../../../fonts/NotoSansJP-Light.otf'))
        .fontSize(10)
        .fill('#021c27')
        .text('Congratulations from Eduverse', {
          align: 'center',
        });
      
      jumpLine(doc, 2)
      
      // Content
      doc
        .font(path.join(__dirname, '../../../fonts/NotoSansJP-Regular.otf'))
        .fontSize(16)
        .fill('#021c27')
        .text('CERTIFICATE OF COMPLETION', {
          align: 'center',
        });
      
      jumpLine(doc, 1)
      
      doc
        .font(path.join(__dirname, '../../../fonts/NotoSansJP-Light.otf'))
        .fontSize(10)
        .fill('#021c27')
        .text('Present to', {
          align: 'center',
        });
      
      jumpLine(doc, 2)
      
      doc
        .font(path.join(__dirname, '../../../fonts/NotoSansJP-Bold.otf'))
        .fontSize(24)
        .fill('#021c27')
        .text(userData?.firstName, {
          align: 'center',
        });
      
      jumpLine(doc, 1)
      
      doc
        .font(path.join(__dirname, '../../../fonts/NotoSansJP-Light.otf'))
        .fontSize(10)
        .fill('#021c27')
        .text('Successfully completed the Super Course for Awesomes.', {
          align: 'center',
        });
      
      jumpLine(doc, 7)
      
      doc.lineWidth(1);
      
      // Signatures
      const lineSize = 174;
      const signatureHeight = 390;
      
      doc.fillAndStroke('#021c27');
      doc.strokeOpacity(0.2);
      
      const startLine1 = 128;
      const endLine1 = 128 + lineSize;
      doc
        .moveTo(startLine1, signatureHeight)
        .lineTo(endLine1, signatureHeight)
        .stroke();
      
      const startLine2 = endLine1 + 32;
      const endLine2 = startLine2 + lineSize;
      doc
        .moveTo(startLine2, signatureHeight)
        .lineTo(endLine2, signatureHeight)
        .stroke();
      
      const startLine3 = endLine2 + 32;
      const endLine3 = startLine3 + lineSize;
      doc
        .moveTo(startLine3, signatureHeight)
        .lineTo(endLine3, signatureHeight)
        .stroke();
      
      doc
        .font(path.join(__dirname, '../../../fonts/NotoSansJP-Bold.otf'))
        .fontSize(10)
        .fill('#021c27')
        .text(courseData?.instructorRef?.firstName, startLine1, signatureHeight + 10, {
          columns: 1,
          columnGap: 0,
          height: 40,
          width: lineSize,
          align: 'center',
        });
      
      doc
        .font(path.join(__dirname, '../../../fonts/NotoSansJP-Light.otf'))
        .fontSize(10)
        .fill('#021c27')
        .text('Instructor', startLine1, signatureHeight + 25, {
          columns: 1,
          columnGap: 0,
          height: 40,
          width: lineSize,
          align: 'center',
        });
      
      doc
        .font(path.join(__dirname, '../../../fonts/NotoSansJP-Bold.otf'))
        .fontSize(10)
        .fill('#021c27')
        .text(userData?.firstName, startLine2, signatureHeight + 10, {
          columns: 1,
          columnGap: 0,
          height: 40,
          width: lineSize,
          align: 'center',
        });
      
      doc
        .font(path.join(__dirname, '../../../fonts/NotoSansJP-Light.otf'))
        .fontSize(10)
        .fill('#021c27')
        .text('Student', startLine2, signatureHeight + 25, {
          columns: 1,
          columnGap: 0,
          height: 40,
          width: lineSize,
          align: 'center',
        });
      
      doc
        .font(path.join(__dirname, '../../../fonts/NotoSansJP-Bold.otf'))
        .fontSize(10)
        .fill('#021c27')
        .text('Nahyan', startLine3, signatureHeight + 10, {
          columns: 1,
          columnGap: 0,
          height: 40,
          width: lineSize,
          align: 'center',
        });
      
      doc
        .font(path.join(__dirname, '../../../fonts/NotoSansJP-Light.otf'))
        .fontSize(10)
        .fill('#021c27')
        .text('Director', startLine3, signatureHeight + 25, {
          columns: 1,
          columnGap: 0,
          height: 40,
          width: lineSize,
          align: 'center',
        });
      
      jumpLine(doc, 4);
      

      
      // Footer
      const bottomHeight = doc.page.height - 100;
      
      
      doc.end();


  } catch (error) {
    console.error('Error generating certificate:', error);
    res.status(500).json({ message: 'Failed to generate certificate', error: (error as Error).message });
  }
};