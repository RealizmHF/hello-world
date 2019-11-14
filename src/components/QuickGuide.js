import React, { Component } from 'react'
import './CSS/QuickGuide.css'
import morphological from './Images/morphological.png'
import molecularONH from './Images/molecularONH.png'
import molecularRetina from './Images/molecularRetina.png'

class QuickGuide extends Component {
    render() {
        return (
            <div className='QuickGuide'>
                <div className='QuickGuide-table'>
                    <h2>
                        Table of Content
                    </h2>
                    <a href="#chapter1">Transcriptional Profiling<br /> for DBA/2J glaucoma</a>
                </div>
                <div className='QuickGuide-content'>
                    <h2 id='chapter1'>
                        Chapter 1: Transcriptional Profiling for DBA/2J glaucoma
                    </h2>
                    <p>
                    Glaucoma is a complex, neurodegenerative disorder affecting 70 million people worldwide and is associated with the death of retinal 
                    ganglion cells (RGCs) and the associated degeneration of the optic nerve [1]. DBA/2J is a widely used mouse model of glaucoma that shows 
                    hallmarks of human glaucoma including age-related IOP elevation, optic nerve excavation and regional patterns of RGC loss [2-7]. DBA/2J mice 
                    develop glaucoma as a result of a disease of the iris that leads to an elevation in IOP. The disease of the iris is caused by mutations in two 
                    genes, GpnmbR150X and Tyrp1b[2, 3]. DBA/2J-Gpnmb+ mice have a functioning Gpnmb gene and serve as a genetically matched control strain that does 
                    not develop glaucoma [8].  An important insult occurs to RGC axons at the optic nerve head in DBA/2J glaucoma [4]. However, other compartments of 
                    the RGC also are likely to undergo early changes in glaucoma such as the RGC soma [9] and their synapses [10]. The mechanisms involved in these early 
                    changes are not well understood. We performed a gene expression profiling study of DBA/2J mice to investigate early changes in both the optic nerve 
                    head and retina separately for each eye (described in detail elsewhere, [11]). Briefly, the optic nerve head and retina were separately profiled using 
                    Mouse 430 v2 arrays (Affymetrix) for 50 DBA/2J eyes and 10 DBA/2J-Gpnmb+ controls.  All data were processed and analyzed using MAANOVA [12]. DBA/2J 
                    eyes were initially grouped based on conventional morphological criteria including degree of axon damage (dataset 1: four groups, Figure 1.1A). 
                    However, these groups were not sensitive to identify early stages of disease that precede morphological damage. Therefore, hierarchical clustering, 
                    a method widely used in cancer biology, [4, 8, 13] was performed to identify groups of eyes undergoing early molecular changes. To our knowledge, this 
                    was the first time molecular clustering had been applied to the study of a complex disease. Eyes were clustered into different stages using both the 
                    expression profiles from the optic nerve head (dataset 2: five stages, Figure 1.1B) and the retina (dataset 3: four stages, Figure 1.1C). To identify 
                    differentially expressed genes for all three datasets, all possible pairwise comparisons were performed. In total, more than 70 different comparisons 
                    were generated and many thousands of differentially expressed genes identified. All raw data has been deposited in NCBI GEO (Accession number: GSE26299)
                    </p>
                    <p>
                    <b>Figure 1.1: Schematic of the datasets available in the first release of Glaucoma Discovery Platform.</b> Each of the three dataset provides a progression 
                    through glaucoma (from no glaucoma to severe glaucoma) defined either morphologically or molecularly [11]. (a) For each eye, the optic nerve head and 
                    retina were analyzed from 10.5 months old DBA/2J (white boxes) and D2-Gpnmb+ control strains (grey box). Stages of glaucoma were determined 
                    morphologically using axon damage assessment of the optic nerve just behind the orbit (see Methods and [8, 13, 14]). (b) Hierarchical clustering using 
                    the gene expression levels of selected glaucoma-relevant genes was used to group the optic nerve heads into 5 molecularly defined stages. Stages 1, 2 
                    and 3 identify early stages of glaucoma not previously detectable using morphological analysis. Stages 4 and 5 contain eyes with moderate and severe 
                    axon damage respectively. (c) A similar hierarchical clustering was performed using the retina tissue. Four stages of disease were identified with 
                    stages 1 and 2 not previously detectable using morphological analysis. Stages 3 and 4 contain eyes with moderate and severe axons damage respectively. 
                    Optic nerve heads and retinas were assessed from the same set of eyes. However, different eyes make up the optic nerve head stages compared to the 
                    retina stages. This suggests a possible asynchrony of events in the optic nerve head compared to the retina. Therefore the optic nerve head dataset is 
                    most sensitive at identifying early molecular changes in the optic nerve head, whereas the retinal stages are most sensitive at identifying early 
                    molecular events in the retina.
                    </p>
                </div>
                <div className='QuickGuide-images'>
                    <img src={morphological} alt='' />
                    <img src={molecularONH} alt='' />
                    <img src={molecularRetina} alt='' />
                </div>
            </div>
        )
    }
}

export default QuickGuide